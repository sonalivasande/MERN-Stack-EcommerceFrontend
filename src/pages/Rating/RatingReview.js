import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import api from "../../api/api";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const RatingReview = ({item}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [reviewComment, setReviewComment] = useState("")
  const stars = Array(5).fill(0);

  var userData = JSON.parse(localStorage.getItem("userDetails"));

  useEffect(() => {
    console.log(item)
}, [item]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const submitReview = () => {
    var data = {
      _id: item.id,
      productName: item.productName,
      isProductLiked: true,
      productRating: currentValue,
      productReviewComment: reviewComment,
      userId: userData._id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      emailId: userData.emailId,
      phoneNumber: userData.phoneNumber,
    };
    console.log(data)
    api.review
      .createreview(data)
      .then((result) => {
        alert("Thank you");
        console.log(result)
        // window.location.replace("/")
      })
      .catch((error) => {
        alert("Something went wrong.");
      });
  };

  return (
    <div style={styles.container}>
      <h6> Write a review </h6>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <textarea placeholder="What's your experience?" style={styles.textarea} onChange={(e) => setReviewComment(e.target.value)}/>

      <button style={styles.button} onClick={() => submitReview()}>
        Submit
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    // alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    borderRadius: 5,
    width: 150,
    padding: 10,
    border: "2px solid teal",
    backgroundColor: "white",
    cursor: "pointer",
    fontWeight: "500",
    alignItems: "center",
  },
};

export default RatingReview;
