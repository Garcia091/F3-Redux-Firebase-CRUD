import React from 'react'
import CardsTaks from './CardsTaks'
import CardSelect from './CardSelect'
import AddTaks from './AddTaks'
import '../../styles/Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'

const AppTaks = () => {

    const dispatch = useDispatch()
    const { name } = useSelector(state => state.auth)
    const { card } = useSelector(state => state.card)

    return (
        <div className="App">
            <div className=" d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark text-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Taks</h5>
                <span className="badge badge-pill bg-danger ml-2 m-2">
                    2
                </span>
                <nav className="my-2 my-md-0 mr-md-3 d-flex   ">
                    <a className="p-2 text-white " href="/">
                        Inicio
                    </a>
                    <a className="p-2 text-white" href="/">
                        Nosotros
                    </a>
                    <p className="p-2 text-white"
                        onClick={() => dispatch(startLogout())}
                    >
                        logout
                    </p>
                    <p className="p-2 text-white d-flex" >
                        {name}
                    </p>
                </nav>
            </div>

            <div className="container ">
                <div className="row mt-4">
                    <div className="col-md-4 text-center py-3">
                        <img src="https://res.cloudinary.com/db9wh5uvt/image/upload/c_thumb,w_100,g_face/v1622742996/x9min2yx30d4bbwgrzpk.png" className="App-logo " alt="logo" />
                        <AddTaks />
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <main>
                                {
                                    (card.length !== 0)
                                        ? <CardsTaks card={card} />
                                        : <CardSelect />
                                }
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppTaks
