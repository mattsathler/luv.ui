import logo from "./assets/logo.png"

export default function App() {
    return (
        <div className="App">
            <div className="p-24 d-flex flex-col gap">
                <img src={logo} className="w-240" alt="Luv Logo" />
                <div className="card">
                    <p className="text-text">Welcome to <strong className="text-primary">Luv.UI</strong>, a modern UI component and style library for the game Luvia!</p>
                </div>

                <div className="dialog primary">
                    <div className="d-flex flex-col gap">
                        <h1 className="text-text">Buttons, Toggles & Variants</h1>
                        <div className="card outline d-flex flex-col gap">
                            <h2>Button</h2>
                            <div className="d-flex flex-row gap items-center">
                                <button className="primary">Primary</button>
                                <button className="secondary">Secondary</button>
                                <button className="outline">Outline</button>
                                <button className="primary circle h-40 w-40 p-0">C</button>
                                <button className="primary">Click me</button>
                            </div>
                        </div>

                        <div className="card outline d-flex flex-col gap">
                            <h2>Checkbox</h2>
                            <div className="d-flex flex-row gap items-center">
                                <input type="checkbox" className="checkbox primary" checked />
                                <input type="checkbox" className="checkbox secondary" checked />
                                <input type="checkbox" className="checkbox text" checked />
                                <input type="checkbox" className="checkbox warn" checked />
                                <input type="checkbox" className="checkbox success" checked />
                                <input type="checkbox" className="checkbox error" checked />
                            </div>
                        </div>

                        <div className="card outline d-flex flex-col gap">
                            <h2>Slide Toggle</h2>
                            <div className="slide-toggle-wrapper">
                                <div className="slide-toggle-wrapper">
                                    <input type="checkbox" className="slide-toggle-input" />
                                    <div className="slide-toggle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dialog primary">
                    <div className="d-flex flex-col gap">
                        <h1 className="text-text">Inputs, Selects & Pickers</h1>
                        <div className="card outline d-flex flex-col gap">
                            <h2>Input</h2>
                            <div className="d-flex flex-row gap items-center">
                                <input type="text" />
                                <input type="date" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dialog primary">
                    <div className="d-flex flex-col gap">
                        <h1 className="text-text">Dialogs</h1>
                        <div className="card outline d-flex flex-col gap">
                            <div className="dialog primary">
                                <strong className="text-primary">Primary</strong>
                            </div>
                            <div className="dialog secondary">
                                <strong className="text-secondary">Secondary</strong>
                            </div>
                            <div className="dialog success">
                                <strong className="text-success">Success</strong>
                            </div>
                            <div className="dialog warn">
                                <strong className="text-warn">Warn</strong>
                            </div>
                            <div className="dialog error">
                                <strong className="text-error">Error</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}