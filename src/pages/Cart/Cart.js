import React from "react";
import { useCart } from "react-use-cart";
import Announcement from "../../component/Announcement";
import Navbar from "../../component/Navbar";
import api from "../../api/api";
import { useEffect } from "react";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  useEffect(() => {}, []);

  var userData = JSON.parse(localStorage.getItem("userDetails"));

  const Checkout = () => {
    var data = {
      // id: userData.id,
      userId: userData._id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      emailId: userData.emailId,
      phoneNumber: userData.phoneNumber,
      productId: items,
      // productName: items[0].productName,
      country: userData.country,
      state: userData.state,
      city: userData.city,
      pincode: userData.pincode,
      // quantity: items[0].productQuantity,
      // totalPrice: items[0].productPrice,
      // productCategory: items[0].productCategory,
      // productSubCategory: items[0].productCategorySubType,
      // isAddedToCart: true,
      // isClickedOnByNow: true,
      // isProductLiked: false,
    };
    api.order
      .createorder(data)
      .then((result) => {
        alert("Thank you! Your order successfully placed.");
        console.log(result);
        emptyCart();
        window.location.replace("/");
      })
      .catch((error) => {
        alert("Something went wrong.");
      });
  };

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
  return (
    <div className="container-xxl">
      <Announcement />
      <Navbar />
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2>
              Cart
              {/* ({totalUniqueItems}) Total Items: ({totalItems}) */}
            </h2>
            <table className="table table-light ta m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.productImage}
                          style={{ height: "6rem" }}
                        />
                      </td>
                      <td>{item.productName}</td>
                      <td>₹ {item.productPrice}</td>
                      <td>Quantity ({item.quantity}) </td>
                      <td>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total Price: ₹ {cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger ms-2" onClick={() => emptyCart()}>
              Clear Cart
            </button>
            <button className="btn btn-primary m-2" onClick={() => Checkout()}>
              Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
