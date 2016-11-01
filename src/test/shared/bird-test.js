/* eslint-disable import/no-extraneous-dependencies, no-console */

import chai from 'chai'
import { stub } from 'sinon'
import sinonChai from 'sinon-chai'
import { describe, it } from 'mocha'
import Bird from '../../shared/bird'

chai.should()
chai.use(sinonChai)

describe('Shared', () => {
  describe('Bird', () => {
    describe('barkInConsole', () => {
      it('should print a talk string with its name', () => {
        stub(console, 'log')
        new Bird('Test Zazu').talkInConsole()
        console.log.should.have.been.calledWith('Test Zazu, you there?')
        console.log.restore()
      })
    })
  })
})