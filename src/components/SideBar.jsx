import { auth } from "../firebase";
import ChatMessages from './ChatMessages';

function UserSideBar() {

    const { photoURL, displayName, email} = auth.currentUser;
    const signOut = () => {
        auth.signOut();
    };
    return (
        <section className="container pt-5">
            <div className="row">
                <aside className="col-lg-3 col-md-4 border-end pb-5 mt-n5">
                    <div className="position-sticky top-0">
                        <div className="text-center pt-5">
                            <div className="d-table position-relative mx-auto mt-2 mt-lg-4 pt-5 mb-3">
                                <img src={photoURL} className="d-block rounded-circle" width="120" alt="John Doe" />
                                <button type="button" className="btn btn-icon btn-light bg-white btn-sm border rounded-circle shadow-sm position-absolute bottom-0 end-0 mt-4" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Change picture">
                                    <i className="bx bx-refresh"></i>
                                </button>
                            </div>
                            <h2 className="h5 mb-1">{displayName}</h2>
                            <p className="mb-3 pb-3">{email}</p>
                            <button type="button" className="btn btn-secondary w-100 d-md-none mt-n2 mb-3" data-bs-toggle="collapse" data-bs-target="#account-menu">
                                <i className="bx bxs-user-detail fs-xl me-2"></i>
                                Account menu
                                <i className="bx bx-chevron-down fs-lg ms-1"></i>
                            </button>
                            <div id="account-menu" className="list-group list-group-flush collapse d-md-block">
                                <a href="account-details.html" className="list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="bx bx-cog fs-xl opacity-60 me-2"></i>
                                    Accountt Details
                                </a>
                                <a href="account-security.html" className="list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="bx bx-lock-alt fs-xl opacity-60 me-2"></i>
                                    Security
                                </a>
                                <a href="account-notifications.html" className="list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="bx bx-bell fs-xl opacity-60 me-2"></i>
                                    Notifications
                                </a>
                                <a href="/chat" className="list-group-item list-group-item-action d-flex align-items-center active">
                                    <i className="bx bx-chat fs-xl opacity-60 me-2"></i>
                                    Messages
                                </a>
                                <a href="account-saved-items.html" className="list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="bx bx-bookmark fs-xl opacity-60 me-2"></i>
                                    Saved Items
                                </a>
                                <a href="account-collections.html" className="list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="bx bx-collection fs-xl opacity-60 me-2"></i>
                                    My Collections
                                </a>
                                <a href="account-payment.html" className="list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="bx bx-credit-card-front fs-xl opacity-60 me-2"></i>
                                    Payment Details
                                </a>
                                <a href="/" onClick={signOut} className="sign-out list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="bx bx-log-out fs-xl opacity-60 me-2"></i>
                                    Sign Out
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
                <ChatMessages
/>
            </div>
        </section>
    );
}

export default UserSideBar;