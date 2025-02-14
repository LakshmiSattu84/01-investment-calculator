import { useState } from "react";

export default function UserInput({userInput ,onInputChange}) {
    

    return (
        <section id='user-input'>
            <div className="input-group">
            <p>
                <label>Intial Investment</label>
                <input type="number" required value={userInput.initialInvestment}
                onChange={(event) => onInputChange('initialInvestment', event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment}
                onChange={(event) => onInputChange('annualInvestment', event.target.value)} />
            </p>
            </div>
            <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={userInput.expectedReturn}
                onChange={(event) => onInputChange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration}
                onChange={(event) => onInputChange('duration', event.target.value)} />
            </p>
            </div>

        </section>
    )
}