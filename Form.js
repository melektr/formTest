import React , {useEffect, useRef}from 'react'
import { View, StyleSheet, Text, Button, TextInput, KeyboardAvoidingView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

const Form = () => {


     const { control, handleSubmit,  formState :{isValid} , errors} = useForm()
   

    const firstNameInputRef = useRef()
    const lastNameInputRef = useRef()
    const emailInputRef = useRef()
    const phoneInputRef =useRef()
    const passwordInputRef = useRef()


    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const PASSWORD_REGEX =/(?=.{8,})/

    const onSubmit = (data) => {
   console.log(data);

    }
    console.log("errors", errors);


    // useEffect(() => {
    //     if (Object.keys(errors).length === 0) {
    //       callback();
    //     }
    //   }, [errors]);

   
// const validate=(values)=> {
//     let errors = {};
//     if (!values.email) {
//       errors.email = 'Email address is required';
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = 'Email address is invalid';
//     }
//     if (!values.password) {
//       errors.password = 'Password is required';
//     } else if (values.password.length < 8) {
//       errors.password = 'Password must be 8 or more characters';
//     }
//     return errors;
//   };

 
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View>
                <Text style={styles.label}> First Name</Text>
                <Controller 
                name='firstName' 
                control={control}
                rules={{required :{value: true, message: {
                    title :' First name error' ,
                    description : ' First name is required'
                }}}}
                // onFocus={()=>{
                //     firstNameInputRef.current.focus()
                // }}
                render= {(props) =>(
                     <TextInput 
                     
                     style={styles.textInput}
                     placeholder = "Name"
                     {...props} 
                    //  onChange={() => {
                    //     setError("username", {
                    //       type: "manual",
                    //     });
                    //   }}
                     onChangeText = {(value) => {props.onChange(value)}}
                     ref={firstNameInputRef}
                     />
                    
                    
                     )}
                      />
                       {errors.firstName &&  Alert.alert(title = errors.firstName.message.title, message = errors.firstName.message.description ,button= [text = 'okay'])}
            </View>
            <View>
                <Text style={styles.label}>Last Name</Text>
                <Controller 
                name='lastName' 
                control={control}
                rules={{required :{value: true, message: {
                    title :' Last name error' ,
                    description : ' Last name is required'
                }}}}
                onFocus={()=> {
                    lastNameInputRef.current.focus()
                }}
                render= {(props) =>(
                     <TextInput style={styles.textInput} 
                     placeholder = "Last name"
                     {...props} 
                     onChangeText = {(value) => {props.onChange(value)} }
                     ref={lastNameInputRef}
                     />
                     )}
                      />
                        {errors.lastName &&  Alert.alert(title = errors.lastName.message.title, message = errors.lastName.message.description ,button= [text = 'okay'])}
            </View>
            <View>
                <Text style={styles.label}>Email</Text>
                <Controller 
                name='email' 
                control={control}
                rules={{required :{value: true, message: {
                    title :' Email error' ,
                    description : ' email is required'
                }}, pattern : {
                    value: EMAIL_REGEX,
                        message: 'Please enter a valid email'
                     
                }}}
                
                onFocus={()=> {
                    emailInputRef.current.focus()
                }}
                
                render= {(props) =>(
                     <TextInput keyboardType='email-address' 
                     style={styles.textInput} 
                     placeholder = "Name@gmail.com"
                     
                     {...props} 
                     onChangeText = {(value) => {props.onChange(value)} }
                     ref={emailInputRef}
                     
                     />
                     
                     )}
                      />
                      {errors.email &&  Alert.alert(title = 'Email error', message = errors.email.message ,button= [text = 'okay'])}
                      
            </View>
            <View>
                <Text style={styles.label}>Password</Text>
                <Controller 
                name='password' 
                control={control}
                rules={{required :{value: true, message: {
                    title :' Password error' ,
                    description : ' Password is required'
                }}, pattern : {
                    value: PASSWORD_REGEX,
                        message: 'Your Password must contain at least 8 characters'
                     
                }}}
                onFocus={()=> {
                    passwordInputRef.current.focus()
                }}
                render= {(props) =>(
                     <TextInput secureTextEntry={true} style={styles.textInput} {...props} 
                     onChangeText = {(value) => {props.onChange(value)} }
                     ref={emailInputRef}
                     />
                     )}
                      />
                        {errors.password &&  Alert.alert(title = 'Password Error' ,message = errors.password.message ,button= [text = 'okay'])}
            </View>
            
         <View>
                <Text style={styles.label}>Phone</Text>
                <Controller 
                name='phone' 
                control={control}
                rules={{required : {value : false , pattern : 
                    {value : /^0|08[0-9]{9,}$/, message :'Phone format is not valid '}}}}
                onFocus={()=> {
                    phoneInputRef.current.focus()
                }}
                render= {(props) =>(
                    
                     <TextInput keyboardType='phone-pad' style={styles.textInput} maxLength={8} {...props} 
                     onChangeText = {(value) => {props.onChange(value)} }
                     ref={emailInputRef}
                     />
                     )}
                      />
          
          </View>
            <View style= {styles.button}>
                <Button  title='Submit '  color='white' onPress={handleSubmit(onSubmit)} />
            </View>
       </KeyboardAvoidingView>
       </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: `#4682b4`,
        padding: 5
    },
    label: {
        color: `#fffafa`,
        marginLeft: 10,
        fontSize : 18,
        fontWeight : 'bold',
        
    }, 
    textInput : {
        marginTop :10,
        marginBottom : 10,
        backgroundColor : 'white',
        height : 40,
        borderRadius : 5,
        padding: 8
    }, 
    button : {
      
        backgroundColor : `#87ceeb`, 
     
        borderRadius : 10,
        
    }
})

export default Form




   // useEffect(() => {
    //    validity()
    // }, [validity])

    // const validity = ()=> {
    //     if(errors.email) {
    //         Alert.alert(title = 'error', message = errors.email.message ,button= [text = 'okay'])
    //     }
    //     else if (errors.firstName) {
    //         Alert.alert(title=errors.firstName.message.title, message=errors.firstName.message.description, button=[text='Okay'])
    //     }
    // }