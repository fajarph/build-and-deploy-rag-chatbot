import "./global.css"
import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}

export const metadata= {
    title: "F1GPT",
    description: "Description"
}

export default RootLayout;