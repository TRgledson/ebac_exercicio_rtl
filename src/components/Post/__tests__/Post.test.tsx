import { render, screen } from "@testing-library/react";
import Post from "..";

describe('Testes para o Post', () => {
    test('Deve Renderizar corretamente', () => {
        render(<Post children={"Ali"} imageUrl=''/>)
        expect(screen.getByText('Ali')).toBeInTheDocument()
    })
})