import { getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";


export default withPageAuthRequired(
    async function AdminPage() {
        const session = getSession();

        return (
            <>Admin</>
        )
    });