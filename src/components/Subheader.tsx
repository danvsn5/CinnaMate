function Subheader(props: any) {

    return (
        <div>
            <div className="subheader">
                <div className="subheader-title">
                    <h1>{props.subheaderTitle}</h1>
                </div>
            </div>
            <hr className="break" />
        </div>


    )
}

export default Subheader