import {Button} from "@/components/ui/button";


export function CustomButton() {

    return (
        <>
            <Button
                // onClick={() => { router.push('/api/auth/login')}}
                variant={`default`}
                className={`rounded-none uppercase`}
            >Membership</Button>
            <Button
                // onClick={() => { router.push('/api/auth/login')}}
                variant={`default`}
                className={`rounded-none uppercase`}
            >Donate</Button>
        </>
    )
}