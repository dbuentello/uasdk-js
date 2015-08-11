import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('User Profile Photo', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.userProfilePhoto
        .findOne(vars.userId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});