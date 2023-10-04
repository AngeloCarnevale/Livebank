export default function Footer (): JSX.Element {
    
    return (
        <footer className="bg-black text-white justify-center items-center flex bottom-0 w-full h-14">
            <h1>Copyright ©{new Date().getFullYear()} Livebank</h1>
        </footer>
    )
}