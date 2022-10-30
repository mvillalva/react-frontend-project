import React from 'react';
import './loginPage.css';


export default function LoginPage() {

    return (
<>
    <div className="LoginPage">

        <h1 className="loginPage-title"> Login to Netflix </h1>

            <form>

                <input type ="text" name="username"></input>

                <input type="password" name="password"/>

                    <Button type="submit">

                        Login
                    </Button>

            </form>

    </div>
</>
);

}