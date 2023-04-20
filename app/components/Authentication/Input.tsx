import { TextInput,Box, Button, Group ,Checkbox,Anchor, Text} from "@mantine/core"
import{useForm,isEmail, hasLength} from '@mantine/form'

interface AuthProps{
    login:boolean
}
export default function Input(props:AuthProps) {
    const form = useForm({
        initialValues:{
            username:'',
            email:'',
            password:''
        },
        validate:{
            email:isEmail('Please enter valid email address'),
            password:hasLength({min:8},'Password must be 8 letters')
        },
    })

    const handleSubmit = (values:any)=> console.log(values)

  return (
    <>
    <form onSubmit={form.onSubmit(handleSubmit)}>
        {props.login && (
            <TextInput
            label="Username"
            placeholder="Enter your name"
            className="mt-4"
            {...form.getInputProps('username')}
        />
        )}
        <TextInput
            label="Email"
            placeholder="Enter your email"
            className="mt-4"
            {...form.getInputProps('email')}
        />
        <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="mt-4"
            {...form.getInputProps('password')}
        />
        
        <Box className="mt-4">
            <Checkbox
                color="dark"
                size={'xs'}
                 label={
                    <>
                      I accept{' '}
                      <Anchor href="">
                        terms and conditions
                      </Anchor>
                    </>
                  }
            />
        </Box>

        <Button type="submit" size="sm" mt="lg" color="dark" className="bg-black w-full text-xs">
           {props.login ? "Sign Up" : "Sign In"}
        </Button>
    </form>
    
    </>
  )
}
