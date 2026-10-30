import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adcionar um novo post', () => {
        render(<Post />);
        fireEvent.change(screen.getByTestId('campo-comentar'), {
            target: {
                value: 'legal'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('legal')).toBeTruthy()
    });

    test('Deve adcionar dois posts', () => {
        render(<Post />);
        fireEvent.change(screen.getByTestId('campo-comentar'), {
            target: {
                value: 'gostei'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        fireEvent.change(screen.getByTestId('campo-comentar'), {
            target: {
                value: 'like'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('like') && screen.getByText('gostei')).toBeInTheDocument()
    })
});
