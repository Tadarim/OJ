import React, { memo } from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound = memo(() => {
    
    const navigate = useNavigate()

    const BackHandler = () => {
        
        navigate('/home')
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={BackHandler}>Back Home</Button>}
        />
    )
})

export default NotFound