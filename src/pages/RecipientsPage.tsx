import Button from "../components/Button";

export default function RecipientsPage(){
    return (
        <div>
            <div className="w-full flex justify-between">
                <h1 className="text-6xl text-center">Recipients Management</h1>
                <Button className="secondary outline rounded">
                    New recipient
                </Button>
            </div>
        </div>
    ) 
}