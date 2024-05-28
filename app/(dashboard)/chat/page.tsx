import { auth } from "@/app/api/auth/[...nextauth]/route";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";

const AdminPage = async () => {

    const session = await getServerSession();

    if (session?.user) {
        return (<h2>Admin page - welcome back {session?.user.username}</h2>);
    }
    return (<>
        please login to see this admin page
    </>);
}
export default AdminPage;