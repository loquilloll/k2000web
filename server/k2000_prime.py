import pyvisa

class trigger:
    def __init__(self, k):
        self.k = k

    def init(self):
        self.k.write('init')

    @property
    def continuous(self):
        return self.k.query(f'init:cont?')

    @continuous.setter
    def continuous(self,cont=1):
        self.k.write(f'init:cont {cont}')

    @property
    def count(self):
        return self.k.query(f'trig:count?')

    @count.setter
    def count(self,count=1):
        self.k.write(f'trig:count {count}')

    @property
    def delay(self):
        return self.k.query(f'trig:del?')

    @delay.setter
    def delay(self,seconds=0):
        self.k.write(f'trig:del {seconds}')

    @property
    def source(self):
        return self.k.query(f'trig:sour?')

    @source.setter
    def source(self,source='bus'):
        self.k.write(f'trig:sour {source}')

    @property
    def timer(self):
        return self.k.query(f'trig:tim?')

    @timer.setter
    def timer(self,seconds=0):
        if seconds != 0:
            self.k.write(f'trig:tim {seconds}')

    @property
    def sample(self):
        return self.k.query(f'samp:count?')

    @sample.setter
    def sample(self,count=1):
        self.k.write(f'samp:count {count}')

class trace:
    def __init__(self, k):
        self.k = k

    @property
    def data(self):
        return self.k.query(f'trac:data?')

class k2000:
    def __init__(self):
        rm = pyvisa.ResourceManager()
        self.k = rm.open_resource("ASRL/dev/ttyUSB0::INSTR", baud_rate = 19200)
        self.k.baud_rate= 19200 
        self.k.data_bits=8
        self.k.stop_bits = pyvisa.constants.StopBits.one
        self.k.parity = pyvisa.constants.Parity.none
        self.k.read_termination = '\r'
        self.trac = trace(self.k)
        self.trig = trigger(self.k)
        
    def config(self, mode, mode2=''):
        print('conf:' + mode + mode2)
        k.write('conf:' + mode + mode2) 

    def measure(self, mode):
        return k.query('meas:' + mode)

    def read(self):
        return k.query('read?')
    
    def trigger(self, mode='', value=''):
        self.SCPI('trig', mode, value)
    
    def SCPI(self,cmd,mode,value):
        if value == '':
            k.write(f'{cmd}:{mode} {value}')
        elif mode == '' and value == '':
            k.write(f'{cmd}')
        else:
            return k.query(f'{cmd}:{mode}?')

    def initiate(self, mode='', value=''):
        self.SCPI('init', mode, value)
    def trig(
            self,
            count=1,
            delay=0,
            source='bus',
            timer=0
            ):
        self.k.write('init:cont 0')
        self.k.write(f'trig:coun {count}')
        self.k.write(f'trig:del {delay}')
        self.k.write(f'trig:sour {source}')
        if timer != 0:
            print(f'trig:tim {timer}')
            self.k.write(f'trig:tim {timer}')

    def reset(self):
        self.k.write('*rst')

    def trg(self):
        self.k.write('*trg')
