
export const Index = () => {
    return (
        <div className="rom-justify-content-center">
            <div className="col-6">
                <h2 className="mb-4"></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb3">
                        <label className="form-label"></label>
                        <input type="email" className="form-control" ref={emailField}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" ref={passwordField}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}