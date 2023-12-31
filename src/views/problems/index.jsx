import React, { memo, useEffect, useState } from 'react'
import { ProblemsWrapper } from './styled'
import { useNavigate, useParams } from 'react-router-dom'
import ProblemContainer from './c-cpns/problem-cotainer'
import CodeArea from './c-cpns/codeArea'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeUseMdAction, fetchProblemAction } from '../../store/modules/problem'
import { codeSubmit } from '../../services/modules/submit'
import MdEditor from '../../components/mdEditor'
import { getRandProblem } from '../../services/modules/problemset'
import { PublishSolution } from '../../services/modules/solution'

const Problems = memo(() => {

  const dispatch = useDispatch()
  const { pid } = useParams()
  const navigate = useNavigate()

  const { codeTemplate, codeLang, useMd } = useSelector((state) => (
    {
      problemInfo: state.problem.problemInfo,
      codeTemplate: state.problem.codeTemplate,
      codeLang: state.problem.codeLang,
      useMd: state.problem.useMd
    }
  ), shallowEqual)


  const fetchRandomProblem = async () => {
    const res = await getRandProblem()
    res.code === 0 && navigate(`/problems/${res.data?.id}`)
  }

  const fetchCodeResult = async (code, lang) => {
    const res = await codeSubmit(code, lang, pid)
    res.code === 0 && navigate('submissions', { state: { res: res.data.output } })
  }

  const submitHandler = (code, lang) => {
    fetchCodeResult(code, lang)
  }

  const modeChangeHandler = () => {
    dispatch(changeUseMdAction(!useMd))
  }

  const fetchPublishResult = async (content, title, tags, cover_url, problem_id = pid) => {
    const res = await PublishSolution(content, title, tags, cover_url, problem_id)
    dispatch(changeUseMdAction(!useMd))
    navigate('solution')
  }
  const publishSolutionHandler = (content, title, tags, cover_url) => {
    fetchPublishResult(content, title, tags, cover_url)
  }


  useEffect(() => {
    dispatch(fetchProblemAction(pid))
  }, [pid])

  return (
    <ProblemsWrapper>
      <div className="problems">
        <ProblemContainer
          pid={pid}
          fetchRandomProblem={fetchRandomProblem}
        />
        <div className="middle-area"></div>
        {
          useMd
            ?
            <MdEditor
              mode='solution'
              btnText='发布题解'
              cancelHandler={modeChangeHandler}
              publishHandler={publishSolutionHandler}
            />
            :
            <CodeArea
              submitHandler={submitHandler}
              codeTemplate={codeTemplate}
              codeLang={codeLang}
            />
        }
      </div>
    </ProblemsWrapper>
  )
})

export default Problems