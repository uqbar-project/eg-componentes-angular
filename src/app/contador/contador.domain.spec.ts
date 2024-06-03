import { Contador } from "./contador.domain"

describe('Contador', () => {
  describe('Inicial', () => {
    const contador = new Contador()
    it('inicialmente no tiene valor', () => {
      expect(contador.valor).toBe(0)
    })
    it('inicialmente no tiene cantidad', () => {
      expect(contador.cantidad).toBe(0)
    })
  })
  describe('Sumar', () => {
    it('Suma un valor siempre si no tiene cantidad', () => {
      const contador = new Contador(5, 0)
      contador.sumar()
      contador.sumar()
      contador.sumar()
      contador.sumar()
      contador.sumar()
      expect(contador.valor).toBe(10)
    })
    it('Suma un valor y vuelve a comenzar cuando llega al límite que le marca la cantidad', () => {
      const contador = new Contador(5, 7)
      contador.sumar()
      contador.sumar()
      contador.sumar()
      contador.sumar()
      contador.sumar()
      expect(contador.valor).toBe(3)
    })
  })
  describe('Restar', () => {
    it('Resta un valor siempre si no tiene cantidad', () => {
      const contador = new Contador(2, 0)
      contador.restar()
      contador.restar()
      contador.restar()
      contador.restar()
      contador.restar()
      expect(contador.valor).toBe(-3)
    })
    it('Resta un valor y vuelve a comenzar cuando llega al límite que le marca la cantidad', () => {
      const contador = new Contador(2, 7)
      contador.restar()
      contador.restar()
      contador.restar()
      contador.restar()
      contador.restar()
      expect(contador.valor).toBe(4)
    })
  })
})
