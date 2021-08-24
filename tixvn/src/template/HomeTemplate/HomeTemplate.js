import { Route } from 'react-router'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'

export default function HomeTemplate(props) {
    return (
        <Route path={props.path} exact render={(propsRoute) => {
            return <div>
                <Header />
                <props.component {...propsRoute} />
                {/* <Footer/> */}
            </div>
        }} />


    )
}
