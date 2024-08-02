import { authOption } from "@/libs/next-auth";
import { getServerSession } from "next-auth";

const admin = async () => {

    const session = await getServerSession(authOption);

    if(session?.user.userRole !== 'ADMIN')
         return (
         <div className="flex h-96 flex-col items-center justify-center">
            دسترسی غیر مجاز
            </div>
         );
         
    return <div>admin</div>;
}
 
export default admin;