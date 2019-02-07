import pyvisa
import time
rm = pyvisa.ResourceManager()
k = rm.open_resource("ASRL/dev/ttyUSB0::INSTR", baud_rate = 19200)
k.baud_rate= 19200
k.data_bits=8
k.stop_bits = pyvisa.constants.StopBits.one
k.parity = pyvisa.constants.Parity.none
k.read_termination = '\r'

class k2000:
    def measure(self, mode):
        return k.query('meas:' + mode)

    def getVoltage(self):
        return self.measure('volt?')

inst = k2000()
count = 1000
k.write('disp:enab 0')
inst.getVoltage()
start = time.time()

for x in range(count):
    k.query('read?')

stop = time.time()

print((stop - start)/count)
k.write('disp:enab 1')
