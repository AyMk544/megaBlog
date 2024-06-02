import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
    // authentication is if the element has the ability to authenticate (type of element)
    // loader is loading if content not loaded
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false);
    }, [authStatus, navigate, authentication])

    return (
        <div>AuthLayout</div>
    )
}
