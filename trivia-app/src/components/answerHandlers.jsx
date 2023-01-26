export const handleUnselectOption = (
  selectedOption,
  selectedAnswers,
  setSelectedAnswers
) => {
  const index = selectedAnswers.findIndex(
    (answer) => answer.answer === selectedOption
  )
  if (index !== -1) {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers.splice(index, 1)
    setSelectedAnswers(newSelectedAnswers)
  }
}

export const handleAnswerSelection = (
  selectedOption,
  currentQuestionIndex,
  selectedAnswers,
  setSelectedAnswers
) => {
  const index = selectedAnswers.findIndex(
    (answer) => answer.questionIndex === currentQuestionIndex
  )
  if (index !== -1) {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[index] = {
      questionIndex: currentQuestionIndex,
      answer: selectedOption,
    }
    setSelectedAnswers(newSelectedAnswers)
  } else {
    setSelectedAnswers([
      ...selectedAnswers,
      { questionIndex: currentQuestionIndex, answer: selectedOption },
    ])
  }
}
