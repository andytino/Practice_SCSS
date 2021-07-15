import React, { Component } from 'react'
import dataTableHeader from './Data/dataTableHeader'
import dataMedia from './Data/dataMedia'
import dataTableContent from './Data/dataTableContent'
import image from '../../../img/ava.png'

class TableHeaderItem extends Component {
    render() {
        const {label, url} = this.props
        return (
            <li>
                <a href = {url}>{label}</a>
            </li>
        )
    }
}

class MediaItem extends Component {
    render() {
        const {url, title, content,img} = this.props
        return(
            <li className ="item">
                <a href = {url}>
                    <img src = {img} alt="thumbnail"/>
                    <h2 className="head">{title}</h2>
                    <p>{content}</p>
                </a>
            </li>
        ) 
    }
}

class TableBody extends Component {
    render() {
        const {name, age, gender, math, english} = this.props
        return(
            <tr>
                <th scope="row">{name}</th>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{math}</td>
                <td>{english}</td>
            </tr>
        )
    }
}
export default class Blog extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <header>
                    <div className="container">
                        <nav>
                            <div className="branding"><h1>Table of Contents</h1></div>
                            <ul>
                                {
                                   dataTableHeader.map((item, idx) => {
                                       return (
                                        <TableHeaderItem
                                            key = {idx}
                                            label = {item.label}
                                            url = {item.url}
                                       />
                                       ) 
                                   }) 
                                }
                            </ul>    
                        </nav>
                    </div>
                </header>
                    
                {/* Jumbotron */}
                <section className="background jumbotron" id="jumbotron">
                    <div className="container">
                        <h1>Forest</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt cum doloribus asperiores rem beatae commodi excepturi incidunt dicta illum expedita, necessitatibus consequatur obcaecati nobis optio dolorum accusantium, ad dolor sed.</p>
                    </div>
                </section>
                
                {/* typography */}
                <section id="typography">
                    <div className="container">
                        <h1>Typography</h1>
                        <h2>H2. Second Level Headline</h2>
                        <p>Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. Atque itaque neque magni vitae tenetur in aliquid, quas omnis fugit. Laudantium praesentium quam, aspernatur <em>aperiam</em> explicabo! Sint unde id quas. Repudiandae!</p>

                        <blockquote>Voluptatum labore sapiente, expedita. Ab facere omnis sed quisquam, perferendis, delectus voluptates asperiores natus ea laudantium nemo architecto laboriosam reiciendis ipsa dignissimos. Eligendi sed, hic vitae, assumenda a dicta ullam.</blockquote>

                        <p>Molestias provident ab culpa dolore accusantium reprehenderit porro, sit, minima sequi sapiente ad explicabo officiis. Odit sint, aut facere qui sit officiis necessitatibus quisquam aspernatur eaque eius, aperiam iste quidem.</p>

                        <h3>H3. Third level headline</h3>
                        <p className="small">Facere quas illum omnis totam fugiat voluptas consequatur officiis reiciendis nihil aut quasi dolore similique illo eveniet rerum, atque, quaerat harum praesentium. Neque quaerat id molestiae cupiditate, laudantium cum blanditiis?</p>

                        <h4>H4. Fourth level headline</h4>
                        <p>Nesciunt odio velit quae sapiente saepe officia fugit delectus asperiores, eius temporibus expedita voluptate, placeat totam! Reprehenderit esse deserunt laboriosam, nihil architecto recusandae quas nam quo placeat, perspiciatis natus. Explicabo.</p>
                        
                        {/* Grid - ava */}
                        <div className="grid">
                            <div className="item"><img src={image} alt=""/></div>
                            <div className="item"><img src={image} alt=""/></div>
                            <div className="item"><img src={image} alt=""/></div>
                            <div className="item"><img src={image} alt=""/></div>
                            <div className="item"><img src={image} alt=""/></div>
                            <div className="item"><img src={image} alt=""/></div> 
                            <div className="item"><img src={image} alt=""/></div> 
                            <div className="item"><img src={image} alt=""/></div> 
                            <div className="item"><img src={image} alt=""/></div> 
                            <div className="item"><img src={image} alt=""/></div> 
                            <div className="item"><img src={image} alt=""/></div> 
                        </div>
                    
                    </div>

                    {/* Media - Blog */}
                    <section id="media">
                    <div className="container">
                        <h1>Blog</h1>
                        <ol className="media">
                            {dataMedia.map((item, idx) => {
                                return(
                                    <MediaItem
                                        key = {idx}
                                        url = {item.url}
                                        img = {item.img}
                                        title = {item.title}
                                        content = {item.content}
                                    />
                                )
                            })}
                        </ol>
                    </div>
                </section>
                </section>
                
                {/* button */}
                <section id="buttons">
                    <div className="container">
                    <h1>Buttons</h1>
                    <button className="btn-default">Default</button>
                    <button className="btn-cool">Cool</button>
                    <button className="btn-hot">Hot</button>
                    </div>
                </section>

                {/* background img */}
                <section className="bridge background">
                    <div className="container">
                        <h1>Canazei- Italy</h1>
                        <p>Aliquet nec ullamcorper sit amet risus. In fermentum posuere urna nec tincidunt praesent. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                </section>

                {/* Lists */}
                <section id="lists">
                    <div className="container">
                        <h1>Lists</h1>

                        {/* article 1 */}
                        <article>
                            <h2>Unordered</h2>
                            <ul>
                                <li>dolor sit amet</li>
                                <li>adipisicing elit
                                    <ul>
                                        <li>Incidunt ut nostrum</li>
                                        <li>fuga impedit blanditiis
                                            <ul>
                                                <li>aspernatur nulla</li>
                                                <li>illo pariatur sequi</li>
                                            </ul>
                                        </li>
                                        <li>Incidunt ut nostrum</li>
                                        <li>consectetur adipisicing</li>
                                    </ul>
                                </li>
                                <li>animi consectetur</li>
                                <li>itaque placeat</li>
                            </ul>
                        </article>

                       {/* article 2 */}
                        <article>
                            <h2>Ordered</h2>
                            <ol>
                                <li>dolor sit amet</li>
                                <li>adipisicing elit
                                    <ol>
                                        <li>Incidunt ut nostrum</li>
                                        <li>fuga impedit blanditiis
                                            <ol>
                                                <li>aspernatur nolla</li>
                                                <li>illo pariatur sequi</li>
                                            </ol>
                                        </li>
                                        <li>Incidunt ut nostrum</li>
                                        <li>consectetur adipisicing</li>
                                    </ol>
                                </li>
                                <li>animi consectetur</li>
                                <li>itaque placeat</li>
                            </ol>
                        </article>
                    </div>
                </section>

                {/* media */}
                <section id="media">
                    <div className="container">
                        <h1>Article</h1>
                        <ol className="media">
                            {dataMedia.map((item, idx) => {
                                return(
                                    <MediaItem
                                        key = {idx}
                                        url = {item.url}
                                        img = {item.img}
                                        title = {item.title}
                                        content = {item.content}
                                    />
                                )
                            })}
                        </ol>
                    </div>
                </section>

                {/* tables */}
                <section id="tables">
                    <div className="container">
                        <h1>Tables</h1>
                        <table className="table">
                            <caption>Table Caption</caption>
                            <thead>
                                <tr>
                                    <th scope="column">Name</th>
                                    <th scope="column">Age</th>
                                    <th scope="column">Gender</th>
                                    <th scope="column">Math</th>
                                    <th scope="column">English</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataTableContent.map((item,idx) => {
                                    return(
                                        <TableBody
                                            key={idx}
                                            name = {item.name}
                                            age = {item.age}
                                            gender = {item.gender}
                                            math = {item.math}
                                            english = {item.english}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
                
                {/* forms */}
                <section id="forms">
                    <div className="container">
                        <h1>Forms</h1>
                        <form>
                
                            {/* name */}
                            <div className="form-group">
                                <label htmlFor="inputName">Name: </label>
                                <input className="form-control" type="text" id="inputName" placeholder="Name"/>
                            </div>

                            {/* email */}
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email: </label>
                                <input className="form-control" type="email" id="inputEmail" placeholder="Email"/>
                            </div>

                            {/* site */}
                            <div className="form-group">
                                <label htmlFor="selectSite">Site: </label>
                                <select className="form-control" id="selectSite">
                                    <option>Choose...</option>
                                    <option>lynda.com</option>
                                    <option>raybo.org</option>
                                    <option>iviewsource.com</option>
                                </select>
                            </div>
                            
                            {/* checkbox */}
                            <div className="checkbox">
                                <label><input id="inputAddList" type="checkbox"/>Add me to e-mail blast</label>
                            </div>
                            
                            {/* comment */}
                            <div className="form-group">
                                <label htmlFor="inputComments">Comments</label>
                                <textarea className="form-control" id="inputComments"></textarea>
                            </div>
                            
                            {/* submit */}
                            <input className="btn btn-default pull-right" type="submit" value="submit"/>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}