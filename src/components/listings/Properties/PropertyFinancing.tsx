"use client"

import { useState } from "react"
import { DollarSign } from "lucide-react"

interface PropertyFinancingProps {
    price: string
}

const PropertyFinancing = ({ price }: PropertyFinancingProps) => {
    const numericPrice = Number(price.replace(/[^0-9.-]+/g, "")) || 0;

    const [downPayment, setDownPayment] = useState(20)
    const [loanTerm, setLoanTerm] = useState(30)
    const [interestRate, setInterestRate] = useState(6.5)

    const principal = numericPrice * ((100 - downPayment) / 100)
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    const monthlyPayment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const formatCurrency = (value: number) =>
        new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)

    return (
        <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Financing Calculator</h2>

            <div className="bg-[#dbb55c2c] border border-slate-100 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Down Payment */}
                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-4">Down Payment: {downPayment}%</label>
                        <input
                            type="range"
                            min="5"
                            max="50"
                            value={downPayment}
                            onChange={(e) => setDownPayment(Number(e.target.value))}
                            className="w-full h-2 bg-[#dbb45c] rounded-lg appearance-none cursor-pointer accent-[#dda72b]"
                        />
                        <p className="text-sm text-gray-600 mt-2">{formatCurrency(numericPrice * (downPayment / 100))}</p>
                    </div>

                    {/* Loan Term */}
                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-4">Loan Term: {loanTerm} years</label>
                        <input
                            type="range"
                            min="5"
                            max="30"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                            className="w-full h-2 bg-orange-700 rounded-lg appearance-none cursor-pointer accent-orange-800"
                        />
                        <p className="text-sm text-gray-600 mt-2">{loanTerm * 12} monthly payments</p>
                    </div>

                    {/* Interest Rate */}
                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-4">Interest Rate: {interestRate}%</label>
                        <input
                            type="range"
                            min="2"
                            max="12"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full h-2 bg-[#00786F] rounded-lg appearance-none cursor-pointer accent-[#036760]"
                        />
                        <p className="text-sm text-gray-600 mt-2">Current market rate</p>
                    </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-slate-900/10">
                    <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 text-gray-700 text-sm mb-1.5">
                            <DollarSign size={16} />
                            <span>Monthly Payment</span>
                        </div>
                        <div className="text-3xl font-bold text-[#dbb45c]">{formatCurrency(monthlyPayment)}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 text-gray-700 text-sm mb-1.5">
                            <DollarSign size={16} />
                            <span>Total Interest</span>
                        </div>
                        <div className="text-3xl font-bold text-[#00786F]">
                            {formatCurrency(monthlyPayment * numberOfPayments - principal)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyFinancing;