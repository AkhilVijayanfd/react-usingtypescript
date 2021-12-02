
import { useState } from "react";

interface IUserForm {
    name:string;
    age:number;
}

const defaultFormValue ={
    name: "",
    age: 0,
};
 export function UserForm(){
     const [ form, setForm ] = useState<IUserForm>(defaultFormValue);

 const onChangeName = (event: any) => {
     setForm ({
         ...form,
         name: event.target.value,
     });

 };

 const onChangeAge = (event: any) => {
    setForm ({
        ...form,
        age: event.target.value,
    });
 };
    return(
        <div>
            User Name:<input
                type="text"
                name="username"
                value={form.name}
                onChange={onChangeName}
            />
            User Age: <input
                type="text"
                name="userage"
                value={form.age}
                onChange={onChangeAge}
            />
        </div>

    );

}
