// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getByTestId = (appComponent: any, testId: string) => {
  const compiled = appComponent.debugElement.nativeElement
  return compiled.querySelector(`[data-testid="${testId}"]`)
}
