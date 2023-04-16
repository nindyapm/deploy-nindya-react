import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Form from "../components/Products/Form";
import "../assets/css/createProduct.css";
import Table from "../components/Products/Table";

const CreateProduct = () => {
    
    return (
        <>
            <Navbar />
            <Header />
            <Form />
            {/* <Products/> */}
            <Table/>

        </>
    )
} 

export default CreateProduct