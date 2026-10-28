import { render, screen } from "@testing-library/react";
import App from "../App";

describe('Teste mas para treinar', () => {
    test('Deve Renderizar corretamente o post', () => {
        const { debug } = render(<App />)
        debug()
        expect(screen.getByText('Olha só que legal minha miniatura do Batmóvel.')).toBeInTheDocument()
    })
})