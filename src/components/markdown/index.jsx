import React, { memo } from 'react'
import { marked } from 'marked'
import { MarkdownWrapper } from './styled'

const options ={
    headerIds: false,
    mangle: false,
    gfm: true ,
	tables: true ,
	breaks: false ,
	pedantic: false ,
	sanitize: false ,
	smartLists: true ,
	smartypants: false
}


const Markdown = memo((props) => {
    
    const {__html} = props
    const html = marked(__html,options)
  return (
    <MarkdownWrapper dangerouslySetInnerHTML={{__html:html}}>

    </MarkdownWrapper>
  )
})


export default Markdown