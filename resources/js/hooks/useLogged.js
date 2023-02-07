import { useSelector } from 'react-redux';
const useLogged = () => {
    const user = useSelector(state => state.user.data);
    return user !== null;
}

export default useLogged;
