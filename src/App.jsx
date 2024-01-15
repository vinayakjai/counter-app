import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, increment500 } from "./redux/slices.js/counterSlice";
import { useGetProductsQuery } from "./redux/slices.js/dynamicDataSlice";

function App() {
  let [visible, setVisible] = useState(false);
  const { data, isLoading,isError} = useGetProductsQuery();
  console.log(isError)
  /*
   */
  const count = useSelector((state) => {
    console.log("useSelector-->", state);
    return state.counterrr.count;
  });
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>Add</button>
    
      <p>count is : {count}</p>

      <button onClick={() => dispatch(increment500(500))}>ADD500</button>
    
      <br />
      <br />
      <div>
        <button onClick={() => setVisible(!visible)}>get Products index</button>
        {visible ? (
          isLoading ? (
            <p>plz wait..</p>
          ) : (
            <div>
              {
                isError?(<p>Some error occured</p>):(
                  data.products && data.products.length>0?(
                    data.products.map((product,index)=>{
                      return (
                        <p key={index}>{product.id}</p>
                      )
                    })
                  ):<p>no products avalaible</p>
                )
              }
            </div>
          )
        ) : null}
      </div>
    </>
  );
}

export default App;
