import './App.css'

export function App() {

    return (

        <article className="tw-followCard">
            
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src="https://unavatar.io/x/admiral_sports"
                    alt="avatar admiral sports" />

                <div className="tw-followCard-info">
                    <strong>Admiral Sports</strong>
                    <span className="tw-followCard-infoUserName">@admiral_sports</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">Seguir</button>
            </aside>
        </article>
    )



}