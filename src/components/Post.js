export default function Post(props) {
    return (
        <div className="row justify-content-center py-3">
            <div className="col-8 bg-secondary p-3 rounded">
                <div className="row">
                    <div className="col-4">
                        <img className="w-100" src={props.href} alt="" />
                    </div>
                    <div className="col-8">
                        <h3 className="text-left">{props.title}</h3>
                        <div className="">
                            <p className="">{props.blurb}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}