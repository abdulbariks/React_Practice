

const Header = () => {
    // Conditional readering Using Switch Statement
    // const status =true;
    // switch (status) {
    //   case true:
    //     return <button>Logout</button>
    //   case false:
    //     return <button>Login</button>
    //   default:
    //     return null
     
    // }

    // Conditional readering Using Ternary Operator
    // const status =true;
    //     return(
    //         <div>
    //             {
    //                 status?<button>Logout</button>:<button>Login</button>
    //             }
    //         </div>
    //     )
        // Conditional readering Using Logical &&
        // const isLoggedIn = true;
        // return(
        //     <div>
        //         <h1>Login Status</h1>
        //         {isLoggedIn && <button>Logout</button>}
        //     </div>
        // )

        // Conditional readering Using Immediately Invoked Function
        const status = false;
        return(
            <div>
             {(()=>{
                if (status == true) {
                    return <button>Logout</button>
                }else{
                    return <button>Login</button>
                }
             })()}
            </div>
        )
};

export default Header;