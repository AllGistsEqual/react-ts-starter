import React from 'react'
import NavBar from '../organisms/NavBar'

const Home = (): React.ReactElement => (
    <>
        <header className="App-header">
            <h1>
                Home
            </h1>
        </header>
        <NavBar />
        <p>
            {/* eslint-disable-next-line max-len */}
            Hi, <strong>my name is Konrad Abe</strong> and I work as a <strong>freelance frontend architect and author</strong> under the online handle of <strong>All Bits Equal</strong>.
        </p>
        <p>
            {/* eslint-disable-next-line max-len */}
            My specialties include React Web and React Native as well as Redux and I am both working with classic Javascript and Typescript, creating an interactive and modern user experience for both web and mobile visitors.
        </p>
    </>
)

export default Home
