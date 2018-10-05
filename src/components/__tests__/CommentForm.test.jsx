import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import CommentForm from '../CommentForm';

describe('Comment Form', () => {
  test('it has a disabled button until both the comment textbox and name field have values', () => {
    // Arrange
    const comment = 'Never put off until tomorrow what can be done today';
    const author = 'Sensei Wu';

    // Act
    const { getByLabelText, getByPlaceholderText, getByText } = render(<CommentForm />);

    // Assets
    const submitButton = getByText('Add Comment');

    expect(submitButton.disabled).toEqual(true);

    const commentTextfieldNode = getByPlaceholderText('Write something...');

    fireEvent.change(commentTextfieldNode, { target: { value: comment } });

    expect(submitButton.disabled).toEqual(true);

    const nameFieldNode = getByLabelText('Your Name');

    fireEvent.change(nameFieldNode, { target: { value: author } });

    expect(submitButton.dispatchEvent).toEqual(false);
  });
});
