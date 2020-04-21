import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { useMediaPredicate } from "react-media-hook"

const Home = lazy(() => import('./view-components/Home'))
const Events = lazy(() => import('./view-components/Events'))

const LoadingMessage = () => `loading...`

import Foot from './partial-comonents/Foot'
import Sidenav from './partial-comonents/Sidenav'
import Topnav from './partial-comonents/Topnav'
import Logo from './partial-comonents/Logo'

const Frame = () => {
const isMedium = useMediaPredicate("(min-width: 600px)")
const breakpoint = isMedium ? "medium" : "small"

    return (
        <BrowserRouter>
            <div className={`app-container ${breakpoint}`}>
                <main>
                    <header>
                        <Logo />
                        <Topnav /> 
                    </header>
                    <section>
                        <Switch>
                            <Suspense fallback={<LoadingMessage />}>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/events" component={Events}/>
                            </Suspense>
                        </Switch>
                    </section>
                    <footer>
                        <Foot />
                    </footer>
                </main>
                <Sidenav />
            </div>
        </BrowserRouter>
    )
}

export default Frame