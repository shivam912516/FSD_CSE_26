import React from "react";
import ReactDOM from "react-dom/client";
function Book() {
    return (
        <div className="book">
            <img
                src="../image/image.png" width="100" height="100" alt="Book Image" />

            <h3>Title: ReactJS</h3>
            <h3>Price: ₹465</h3>

            <button>Add To Cart</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>
                <center>My Book Store</center>
            </h1>
            <div className="bookstore">
            <Book />
            <Book />
            <Book />
            </div>
        </div>
    );
}

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);

root.render(<App />);