function Wrapper(props){
    return (
        <main className={props.className}>
            {props.children}
        </main>
    );
}

export default Wrapper;