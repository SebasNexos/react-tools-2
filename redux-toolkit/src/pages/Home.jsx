import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { unsetUser } from "../reducers/user/userSlice";
import { ProductsList } from "../components/ProductList";
import Axios from "axios";


export const Home = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 

    const [products, setProducts] = useState([]); 


    const user = useSelector(state => state.user); 

    useEffect( () => {
        Axios.get('http://localhost:3000/products')
        .then(response => {
            setProducts(response.data)
        })
    }, [])

    const handleLogout = () => {
        dispatch(unsetUser());
        navigate("/");
    };


    return (
        <>
            <h2>Home</h2>
            <p>Welcome {user.fullName} / {user.email}</p>
            <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
            <hr />
            <ProductsList products={products} />
        </>
    )
}