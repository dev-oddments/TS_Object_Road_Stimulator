import Wheel from './Wheel';

describe('wheel', () => {
  context('when kind of wheel is rubber', () => {
    const rubberWheel = new Wheel('rubber');

    it('calls kind', () => {
      expect(rubberWheel.kind).toBe('rubber');
    });

    it('calls rpm', () => {
      expect(rubberWheel.rpm).toBe(0);
    });

    it('calls rpm after setNewRPM', () => {
      rubberWheel.setNewRPM(5);

      expect(rubberWheel.rpm).toBe(5);
    });
  });

  context('when kind of wheel is plastic', () => {
    const palsticWheel = new Wheel('plastic');

    it('calls kind', () => {
      expect(palsticWheel.kind).toBe('plastic');
    });

    it('calls rpm', () => {
      expect(palsticWheel.rpm).toBe(0);
    });

    it('calls rpm after setNewRPM', () => {
      palsticWheel.setNewRPM(8);

      expect(palsticWheel.rpm).toBe(8);
    });
  });
});
