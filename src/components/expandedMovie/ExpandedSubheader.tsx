function ExpandedSubheader(props: any) {
    return (
        <div className="subheader-container">
            <div className="subheader">
                <div className="exp-subheader-title">
                    <h1>{props.subheaderTitle}</h1>
                </div>
            </div>
            <hr className="break" />
        </div>
    )
}

export default ExpandedSubheader