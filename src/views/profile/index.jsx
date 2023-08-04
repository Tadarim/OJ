import React, { memo, useEffect, useState } from 'react'
import { ProfileWrapper } from './style'
import { DatePicker, Input, Radio, Table, message } from 'antd'
import { useParams } from 'react-router-dom'
import { getProfileInfo, submitProfileInfo } from '../../services/modules/profile'

const { TextArea } = Input

const UserProfile = memo(() => {

    const { uid } = useParams()

    const [profileInfo, setProfileInfo] = useState()
    const [userName,setUserName] = useState('')
    const [gender,setGender] = useState('')
    const [birthday,setBirthday] = useState('')
    const [location,setLocation] = useState('')
    const [introduce,setIntroduce] = useState('')


    const fetchProfileInfo = async (page,uid) => {
        const res = await getProfileInfo(page,uid)
        setProfileInfo(res?.data)
    }


    const [page, setPage] = useState(1)

    const columns = [
        {
            title: '最近提交时间',
            dataIndex: 'last_created_at_str',
        },
        {
            title: '题目',
            dataIndex: 'problem_name',
        },
        {
            title: '题目难度',
            dataIndex: 'difficulty',
            filters: [
                {
                    text: '简单',
                    value: '简单',
                },
                {
                    text: '中等',
                    value: '中等',
                },
                {
                    text: '困难',
                    value: '困难',
                },
            ],
            onFilter: (value, record) => record.difficulty.indexOf(value) === 0,
        },
        {
            title: '提交次数',
            dataIndex: 'submit_count'
        },
    ];

    useEffect(() => {
        fetchProfileInfo(page,uid)
    }, [page,uid])

    useEffect(() => {
        if(profileInfo){
            setUserName(profileInfo.userinfo.user_name)
            setIntroduce(profileInfo.userinfo.introduce)
            setGender(profileInfo.userinfo.gender)
            setLocation(profileInfo.userinfo.cur_location)
            setBirthday(profileInfo.userinfo.birthday)
        }
    },[profileInfo])


    const submitHandler = async() =>{
        const {code} = await submitProfileInfo(userName,gender,birthday,location,introduce)
        if(code === 0){
            message.success('保存成功！')
        }else{
            message.error('保存失败！')
        }
    }

    return (
        <ProfileWrapper>
            <div className="main-wrapper">
                <div className='main'>
                    <div className='form-wrapper'>
                        <form>
                            <div className='avatar-wrapper'>
                                <img src={profileInfo?.userinfo?.avatar_url} alt="" />
                            </div>
                            <div className='options-wrapper'>
                                <div className="item">
                                    <div className="item-title">
                                        <label htmlFor="realName">昵称</label>
                                    </div>
                                    <div className="item-desc">
                                        <Input
                                            id='realName'
                                            name='user_name'
                                            style={{
                                                height: 40,
                                                width: 396
                                            }}
                                            placeholder='昵称(必填)'
                                            value={userName}
                                            onChange={(e) => {setUserName(e.target.value)}}
                                            disabled={!!uid}
                                        />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-title">
                                        <label htmlFor="gender">性别</label>
                                    </div>
                                    <Radio.Group disabled={!!uid} buttonStyle='solid' value={gender} onChange={e => setGender(e.target.value)}>
                                        <Radio.Button value={"男"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" >
                                                <path fillRule="evenodd" d="M17.022 5.564h-2.586a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V6.978L16.17 9.243a7.001 7.001 0 01-10.557 9.143 7 7 0 019.143-10.557l2.265-2.265zM14.1 9.9a5 5 0 10-7.071 7.072 5 5 0 007.07-7.072z" clipRule="evenodd"></path>
                                            </svg>
                                            男性
                                        </Radio.Button>
                                        <Radio.Button value={"女"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                                <path fillRule="evenodd" d="M13 15.93V17h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2v-1.07A7.001 7.001 0 0112 2a7 7 0 011 13.93zM12 14a5 5 0 100-10 5 5 0 000 10z" clipRule="evenodd"></path>
                                            </svg>
                                            女性
                                        </Radio.Button>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className='options-wrapper'>
                                <div className="item">
                                    <div className="item-title">
                                        <label htmlFor="birthday">生日</label>
                                    </div>
                                    <div className="item-desc">
                                        <Input
                                            style={{
                                                width: 396,
                                                height: 40
                                            }}
                                            value={birthday}
                                            disabled={!!uid}
                                            placeholder='请输入日期'
                                            onChange={e => setBirthday(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-title">
                                        <label htmlFor="location">现居地</label>
                                    </div>
                                    <div className="item-desc">
                                        <Input
                                            id='location'
                                            placeholder='请输入地址'
                                            style={{
                                                height: 40
                                            }}
                                            disabled={!!uid}
                                            value={location}
                                            onChange={e => setLocation(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className='text-wrapper'>
                                <div className="item-title">
                                    <label htmlFor='text'>个人介绍</label>
                                </div>
                                <TextArea
                                    id='text'
                                    value={introduce}
                                    onChange={e => setIntroduce(e.target.value)}
                                    maxLength={100}
                                    showCount
                                    placeholder="关于你的个性、兴趣或经验..."
                                    style={{
                                        height: 120
                                    }}
                                    disabled={!!uid}
                                />
                            </div>
                            <div className="submit-button">
                                <button type="button" onClick={submitHandler}>保存</button>
                            </div>
                        </form>
                    </div>
                    <div className="record-wrapper">
                        <div className="record">
                            <div className="left-wrapper">
                                <div>
                                    <Table
                                        columns={columns}
                                        dataSource={profileInfo?.submit_list}
                                        pagination={{
                                            position: ["bottomCenter"],
                                            showSizeChanger: false,
                                            value: { page },
                                            onChange: (e) => { setPage(e.target.value) }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="right-wrapper">
                                <div className="numbers-wrapper">
                                    <div className="row">
                                        <div className="left">
                                            <div className="greenBlock"></div>
                                            已通过题目
                                        </div>
                                        <div className="right">{profileInfo?.access_problem_count}</div>
                                    </div>
                                    <div className="row">
                                        <div className="left">
                                            <div className="redBlock"></div>
                                            未通过题目
                                        </div>
                                        <div className="right">{profileInfo?.submit_not_access_problem_count}</div>
                                    </div>
                                    <div className="row">
                                        <div className="left">
                                            <div className="greyBlock"></div>
                                            未开始题目
                                        </div>
                                        <div className="right">{profileInfo?.problem_count - profileInfo?.submit_problem_count}</div>
                                    </div>
                                    <div className="greyRow">
                                        <div className="left">提交总数</div>
                                        <div className="right">{profileInfo?.userinfo?.submit_count}</div>
                                    </div>
                                    <div className="greyRow">
                                        <div className="left">通过的提交</div>
                                        <div className="right">{profileInfo?.userinfo?.access_count}</div>
                                    </div>
                                    <div className="greyRow">
                                        <div className="left">提交通过率</div>
                                        <div className="right">{profileInfo?.userinfo?.access_percent}%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileWrapper>
    )
})

export default UserProfile