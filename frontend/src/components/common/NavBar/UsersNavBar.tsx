export function UsersNavBar() {
    return (
            <header id="admin-header">
                <nav
                    className="navbar header-dark navbar-expand-lg bg-black text-white nav-bar container-fluid flex items-center justify-between"
                    style={{height: '60px', paddingRight: '20px', paddingLeft: '50px'}}>
                    <label id="formIcon" className="form-label m-0 absolute left-8vw font-semibold font-sans"
                           style={{fontSize: '20px', width: '20vw'}}>Label</label>
                    <div className="flex items-center justify-between">
                        <div className="nav-item flex items-center justify-center" style={{paddingLeft: '58.25vw'}}>
                            <span className="text-darkgoldenrod">Time :</span>
                            <div className="nav-link active currTime font-semibold text-lg" aria-current="page"
                                 >Current Time
                            </div>
                        </div>
                        <div className="nav-item absolute flex items-center justify-center" style={{left: '74vw'}}>
                            <span className="text-darkgoldenrod">Date :</span>
                            <div className="nav-link active currDate font-semibold text-lg" aria-current="page"
                                 >Current Date
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto relative left-16%">
                        <div className="inline">
                            {/* SVG content here */}
                        </div>
                        <button type="button" className="btn relative z-10 left-negative-5">Log Out</button>
                    </div>
                </nav>
            </header>
    );
}