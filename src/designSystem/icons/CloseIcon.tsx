import React from 'react';

interface CloseIconProps {
	className?: string;
}

export const CloseIcon = ({ className }: CloseIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			className={className}
		>
			<image
				width="24"
				height="24"
				xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAIABJREFUeF7t3VuObMd1LVCqZZJaJf3YNOEfqVWSeuVPV4lVh1SdqpORe8djPYYAAReXO2NHjBmZa7IM2H/4r//975/8hwABAgQIEOgl8AcFoFfgTkuAAAECBF4FFAD3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABcAcIECBAgEBDAQWgYeiOTIAAAQIEFAB3gAABAgQINBRQABqG7sgECBAgQEABqHUH/vhynH/VOpLTECAQSMBvTKAw7m5FAbgrGOfz//OylZ9f/vv3l//+Nc627IQAgSICfmOKBPl+DAWgRqDvX8z30ygBNXJ1CgJRBPzGREli4j4UgImYh5b6+MVUAg4F4bUEigr4jSkarAKQO9ivvphKQO5c7Z5AFAG/MVGSWLAPBWAB6qYlH30xlYBNQXgNgaICfmOKBvt+LAUgZ8CjX0wlIGe+dk3gtIDfmNMJbHi/ArABefIrnv1iKgGTA7AcgeICfmOKB+wvADkDvvrFVAJy5m3XBHYL+I3ZLX7wff4CcBD/yVff/WIqAU+Ce5xAMwG/Mc0CVwByBD7ri6kE5MjbLgnsFvAbs1s8wPsUgAAhPNjC7C+mEhA/czsksFPAb8xO7UDvUgAChfHJVlZ9MZWA2LnbHYFdAn5jdkkHfI8CEDCUty2t/mIqAXGztzMCOwT8xuxQDvwOBSBmOLu+mEpAzPztisBqAb8xq4UTrK8AxAtp9xdTCYh3B+yIwEoBvzErdROtrQDECuvUF1MJiHUP7IbAKgG/MatkE66rAMQJ7fQXUwmIcxfshMAKAb8xK1QTr6kAxAgvyhdTCYhxH+yCwGwBvzGzRQuspwCcDzHaF1MJOH8n7IDATAG/MTM1C62lAJwNM+oXUwk4ey+8ncAsAb8xsyQLrqMAnAs1+hdTCTh3N7yZwAwBvzEzFAuvoQCcCTfLF1MJOHM/vJXAXQG/MXcFG3xeAdgf8p9eXvmP/a+9/cZfXlZ4/VHxHwIEYgtkG/7vmn9++X/8MzZtrd0pAGfy/MvLa/925tW33vr3l0//9dYKPkyAwEqBrMP/dd+v/5LhPxsFFICN2B9epQScs/dmAhUFDP+KqS48kwKwEHdgaSVgAMkjBAg8FDD8HxJ54KOAAnD+TigB5zOwAwKZBQz/zOkd3LsCcBD/d69WAmLkYBcEsgkY/tkSC7RfBSBOGEpAnCzshEAGAcM/Q0qB96gAxApHCYiVh90QiCpg+EdNJtG+FIB4YSkB8TKxIwKRBAz/SGkk3osCEDM8JSBmLnZF4LSA4X86gULvVwDihqkExM3GzgicEDD8T6gXfqcCEDtcJSB2PnZHYJeA4b9LutF7FID4YSsB8TOyQwIrBQz/lbqN11YAcoSvBOTIyS4JzBYw/GeLWu+bgAKQ5zIoAXmyslMCMwQM/xmK1vhSQAHIdTmUgFx52S2BqwKG/1U5nxsWUACGqcI8qASEicJGCCwRMPyXsFr0o4ACkPNOKAE5c7NrAo8EDP9HQv75NAEFYBrl9oWUgO3kXkhgqYDhv5TX4v4CUOsOKAG18nSavgKGf9/sj53cXwCO0U97sRIwjdJCBI4IGP5H2L1UAahxB5SAGjk6RT8Bw79f5mFOrACEieL2RpSA24QWILBVwPDfyu1lHwUUgFp3QgmolafT1BUw/Otmm+ZkCkCaqIY3qgQMU3mQwBEBw/8Iu5f6C0CPO6AE9MjZKfMJGP75Miu7Y38BKBvtT0pA3WydLKeA4Z8zt7K7VgDKRvvvgykBtfN1ujwChn+erNrsVAGoH7USUD9jJ4wtYPjHzqft7hSAHtErAT1ydsp4AoZ/vEzs6E1AAehzFZSAPlk7aQwBwz9GDnbxhYAC0OtqKAG98nbacwKG/zl7bx4UUAAGoQo9pgQUCtNRQgoY/iFjsamPAgpAzzuhBPTM3anXCxj+6429YZKAAjAJMuEySkDC0Gw5tIDhHzoem/MXAHfg9wJKgPtAYI6A4T/H0SobBfwFYCN20FcpAUGDsa00AoZ/mqhs9PcCCoD78CqgBLgHBK4JGP7X3HwqgIACECCEIFtQAoIEYRtpBAz/NFHZ6GcCCoB78XsBJcB9IDAmYPiPOXkqsIACEDicQ1tTAg7Be20aAcM/TVQ2+iMBBcD9+ExACXAvCHwuYPi7GWUEFIAyUU4/iBIwndSCyQUM/+QB2v5/CigAbsSPBJQA94PArwKGv5tQTkABKBfp9AMpAdNJLZhMwPBPFpjtjgkoAGNO3Z9SArrfgL7nN/z7Zl/+5ApA+YinHVAJmEZpoSQChn+SoGzzmoACcM2t66eUgK7J9zu34d8v83YnVgDaRX77wErAbUILBBcw/IMHZHtzBBSAOY7dVlECuiXe57yGf5+s259UAWh/BS4DKAGX6XwwqIDhHzQY21ojoACsce2yqhLQJen65zT862fshB8EFABX4q6AEnBX0OdPCxj+pxPw/iMCCsAR9nIvVQLKRdrmQIZ/m6gd9KOAAuBOzBJQAmZJWmeXgOG/S9p7QgooACFjSbspJSBtdO02bvi3i9yB/QXAHVgtoASsFrb+XQHD/66gz5cQ8BeAEjGGO4QSEC4SG3oTMPxdBQJvAgqAq7BKQAlYJWvdqwKG/1U5nyspoACUjDXMoZSAMFG034jh3/4KAPgooAC4E6sFlIDVwtZ/JGD4PxLyz1sKKAAtY99+aCVgO7kXvgkY/q4CgS8EFABXY5eAErBL2nveBQx/d4HADwQUANdjp4ASsFO797sM/975O/2AgAIwgOSRqQJKwFROi30iYPi7FgQGBBSAASSPTBdQAqaTWvBNwPB3FQgMCigAg1Aemy6gBEwnbb+g4d/+CgB4RkABeEbLs7MFlIDZon3XM/z7Zu/kFwUUgItwPjZNQAmYRtl2IcO/bfQOfkdAAbij57OzBJSAWZL91jH8+2XuxJMEFIBJkJa5LaAE3CZst4Dh3y5yB54poADM1LTWXQEl4K5gn88b/n2ydtJFAgrAIljLXhZQAi7Ttfmg4d8magddKaAArNS19lUBJeCqXP3PGf71M3bCTQIKwCZor3laQAl4mqz8Bwz/8hE74E4BBWCntnc9K6AEPCtW93nDv262TnZIQAE4BO+1wwJKwDBV2QcN/7LROthJAQXgpL53jwooAaNS9Z4z/Otl6kRBBBSAIEHYxkMBJeAhUbkHDP9ykTpQJAEFIFIa9vJIQAl4JFTnnxv+dbJ0kqACCkDQYGzrSwEloP7lMPzrZ+yEAQQUgAAh2MLTAkrA02RpPmD4p4nKRrMLKADZE+y7fyWgXvaGf71MnSiwgAIQOBxbeyigBDwkSvOA4Z8mKhutIqAAVEmy7zmUgPzZG/75M3SChAIKQMLQbPk7ASUg76Uw/PNmZ+fJBRSA5AHa/jcBJSDfZTD882Vmx4UEFIBCYTrKT0pAnktg+OfJyk6LCigARYNtfCwlIH74hn/8jOywgYAC0CDkhkdUAuKGbvjHzcbOmgkoAM0Cb3RcJSBe2IZ/vEzsqLGAAtA4/AZHVwLihGz4x8nCTgj8W0ABcBGqCygB5xM2/M9nYAcEvhNQAFyKDgJKwLmUDf9z9t5M4IcCCoAL0kVACdiftOG/39wbCQwLKADDVB4sIKAE7AvR8N9n7U0ELgkoAJfYfCixgBKwPjzDf72xNxC4LaAA3Ca0QEIBJWBdaIb/OlsrE5gqoABM5bRYIgElYH5Yhv98UysSWCagACyjtXACASVgXkiG/zxLKxHYIqAAbGH2ksACSsD9cAz/+4ZWILBdQAHYTu6FAQWUgOuhGP7X7XySwFEBBeAov5cHElACng/D8H/ezCcIhBFQAMJEYSMBBJSA8RAM/3ErTxIIKaAAhIzFpg4KKAGP8Q3/x0aeIBBeQAEIH5ENHhBQAr5GN/wPXEivJLBCQAFYoWrNCgJKwPcpGv4VbrYzEHgTUABcBQJfCygBv9kY/r4pBIoJKADFAnWc6QJKwE8/Gf7Tr5UFCZwXUADOZ2AH8QU6lwDDP/79tEMClwQUgEtsPtRQoGMJMPwbXnRH7iOgAPTJ2knvC3QqAYb//ftiBQKhBRSA0PHYXECBDiXA8A948WyJwGwBBWC2qPU6CFQuAYZ/hxvsjAReBBQA14DANYGKJcDwv3YXfIpASgEFIGVsNh1EoFIJMPyDXCrbILBLQAHYJe09VQUqlADDv+rtdC4CPxBQAFwPAvcFsg7QX96O/vN9gu0rvO791d1/CBC4KKAAXITzMQIfBLL+JSBjkK+D/728ZNy/PRMIIaAAhIjBJooIKAHrgzT81xt7QxMBBaBJ0I65TUAJWEdt+K+ztXJDAQWgYeiOvFxACZhPbPjPN7VicwEFoPkFcPxlAkrAPFrDf56llQh8E1AAXAYC6wSUgPu2hv99QysQ+FRAAXAxCKwVUAKu+xr+1+18ksBDAQXgIZEHCNwWUAKeJzT8nzfzCQJPCSgAT3F5mMBlASVgnM7wH7fyJIHLAgrAZTofJPC0gBLwmMzwf2zkCQJTBBSAKYwWITAsoAR8TWX4D18jDxK4L6AA3De0AoFnBZSA78UM/2dvkecJ3BRQAG4C+jiBiwJKwG9whv/FS+RjBO4IKAB39HyWwD0BJeDX/4t+/g/73LtHPk3gkoACcInNhwhME+hcAgz/adfIQgSeF1AAnjfzCQKzBTqWAMN/9i2yHoEnBRSAJ8E8TmCRQKcSYPgvukSWJfCMgALwjJZnCawV6FACDP+1d8jqBIYFFIBhKg8S2CJQuQQY/luukJcQGBNQAMacPEVgp0DFEmD477xB3kVgQEABGEDyCIEDApVKgOF/4AJ5JYFHAgrAIyH/nMA5gQolwPA/d3+8mcAPBRQAF4RAbIHMJcDwj3237K65gALQ/AI4fniB1yH6c/hdfr7Bv7/8f/816d5tm0B5AQWgfMQOmFgg8/B/Z1cCEl9AW68toADUztfp8gpUGP5KQN77Z+cNBBSABiE7YjqBSsNfCUh3/Wy4i4AC0CVp58wiUHH4KwFZbp99thJQAFrF7bDBBSoPfyUg+OWzvX4CCkC/zJ04pkCH4a8ExLx7dtVUQAFoGrxjhxLoNPyVgFBXz2Y6CygAndN39ggCHYe/EhDh5tlDewEFoP0VAHBQoPPwVwIOXjyvJvAqoAC4BwTOCBj+v7n7XxZ05g56a3MBBaD5BXD8IwKG//fsSsCRq+ilnQUUgM7pO/sJAcP/a3Ul4MSN9M62AgpA2+gd/ICA4f8YXQl4bOQJAlMEFIApjBYh8FDA8H9I9O0BJWDcypMELgsoAJfpfJDAsIDhP0ylBDxP5RMErgkoANfcfIrAqIDhPyr1/XP+EnDdzicJPBRQAB4SeYDAZQHD/zKdvwTcp7MCgR8LKABuCIE1Aob/PFd/CZhnaSUC3wQUAJeBwHwBw3++qRIw39SKzQUUgOYXwPGnCxj+00n9jwPWkVq5s4AC0Dl9Z58tYPjPFv1+PX8JWG/sDU0EFIAmQTvmcgHDfzmxvwTsI/amDgIKQIeUnXG1QNbh/7rv/3v5799WAy1Y318CFqBaspeAAtArb6edL5B5+P/yxvEXJWD+xbAigegCCkD0hOwvskCF4f/uqwREvmn2RmCBgAKwANWSLQQqDX8loMWVdUgC/ymgALgRBJ4XqDj8lYDn74FPEEgtoACkjs/mDwhUHv5KwIEL5ZUETgkoAKfkvTejQIfhrwRkvJn2TOCCgAJwAc1HWgp0Gv5KQMsr7tDdBBSAbok77xWBjsNfCbhyU3yGQCIBBSBRWLZ6RKDz8FcCjlw5LyWwR0AB2OPsLTkFDP/fcvO/JyDnHbZrAl8KKAAuB4HPBQz/712UAN8WAoUEFIBCYTrKNAHD/2tKJWDaNbMQgbMCCsBZf2+PJ2D4P85ECXhs5AkC4QUUgPAR2eBGAcN/HFsJGLfyJIGQAgpAyFhs6oCA4f88uhLwvJlPEAgjoACEicJGDgoY/tfxlYDrdj5J4KiAAnCU38sDCBj+90NQAu4bWoHAdgEFYDu5FwYSMPznhaEEzLO0EoEtAgrAFmYvCShg+M8PRQmYb2pFAssEFIBltBYOLGD4rwtHCVhna2UCUwUUgKmcFksgYPivD0kJWG/sDQRuCygAtwktkEjA8N8XlhKwz9qbCFwSUAAusflQQgHDf39oSsB+c28kMCygAAxTeTCxgOF/Ljwl4Jy9NxP4oYAC4IJUFzD8zyesBJzPwA4IfCegALgUlQUM/zjpKgFxsrATAv8WUABchKoChn+8ZJWAeJnYUWMBBaBx+IWPbvjHDVcJiJuNnTUTUACaBd7guIZ//JCVgPgZ2WEDAQWgQciNjmj45wlbCciTlZ0WFVAAigbb8FiGf77QlYB8mdlxIQEFoFCYjY9i+OcNXwnIm52dJxdQAJIHaPs/Gf75L4ESkD9DJ0gooAAkDM2WvwkY/nUugxJQJ0snSSKgACQJyja/EzD8610KJaBepk4UWEABCByOrX0pYPjXvRxKQN1snSyYgAIQLBDbeShg+D8kSv+AEpA+QgfIIKAAZEjJHt8FDP8+d0EJ6JO1kx4SUAAOwXvt0wKG/9Nk6T+gBKSP0AEiCygAkdOxN//m7w4oAe4AgUUCCsAiWMtOE/Bv/tMo0y6kBKSNzsYjCygAkdOxN8PfHXgXUALcBQKTBRSAyaCWmyZg+E+jLLOQElAmSgeJIKAAREjBHj4KGP7uxFcCSoC7QWCSgAIwCdIy0wQM/2mUZRdSAspG62A7BRSAndre9UjA8H8k5J+/CygB7gKBmwIKwE1AH58mYPhPo2yzkBLQJmoHXSGgAKxQteazAob/s2Ke95cAd4DATQEF4Cagj98WMPxvE7ZfwF8C2l8BAFcEFIAraj4zS8DwnyVpHSXAHSDwpIAC8CSYx6cJGP7TKC30JqAEuAoEnhBQAJ7A8ug0AcN/GqWFPggoAa4EgUEBBWAQymPTBAz/aZQW+kJACXA1CAwIKAADSB6ZJmD4T6O00AMBJcAVIfBAQAFwRXYJGP67pL3nXUAJcBcI/EBAAXA9dggY/juUveMzASXAvSDwhYAC4GqsFjD8Vwtb/5GAEvBIyD9vKaAAtIx926EN/23UXvRAQAlwRQh8EFAAXIlVAob/KlnrXhVQAq7K+VxJAQWgZKzHD2X4H4/ABr4QUAJcDQJvAgqAqzBbwPCfLWq92QJKwGxR66UUUABSxhZ204Z/2Ghs7IOAEuBKtBdQANpfgWkAhv80SgttElACNkF7TUwBBSBmLtl2ZfhnS8x+3wWUAHehrYAC0Db6aQc3/KdRWuiQgBJwCN5rzwooAGf9s7/d8M+eoP37S4A70FZAAWgb/e2DG/63CS0QTMBfAoIFYjtrBRSAtb5VVzf8qybrXEqAO9BGQAFoE/W0gxr+0ygtFFRACQgajG3NFVAA5npWX83wr56w870LKAHuQnkBBaB8xNMOaPhPo7RQEgElIElQtnlNQAG45tbtU4Z/t8Sd118C3IHyAgpA+YhvH9Dwv01ogeQC/hKQPEDb/1xAAXAzfiRg+LsfBH4VUALchHICCkC5SKcdyPCfRmmhIgJKQJEgHeNXAQXATfhMwPB3Lwh8LqAEuBllBBSAMlFOO4jhP43SQkUFlICiwXY7lgLQLfEfn9fwdx8IjAkoAWNOngosoAAEDmfz1gz/zeBel15ACUgfYe8DKAC9838/veHvHhC4JqAEXHPzqQACCkCAEA5vwfA/HIDXpxdQAtJH2PMACkDP3P2bf+/cnX6+gBIw39SKiwUUgMXAgZf3b/6Bw7G1lAJKQMrY+m5aAeiZveHfM3enXi+gBKw39oZJAgrAJMhEyxj+icKy1ZQCSkDK2PptWgHolbnh3ytvpz0noAScs/fmQQEFYBCqwGOGf4EQHSGVgBKQKq5+m1UAemRu+PfI2SnjCSgB8TKxozcBBaD+VTD862fshLEFlIDY+bTdnQJQO3rDv3a+TpdHQAnIk1WbnSoAdaM2/Otm62Q5BZSAnLmV3bUCUDNaw79mrk6VX0AJyJ9hmRMoAGWi/HYQw79epk5US0AJqJVn2tMoAGmj+3Tjhn+tPJ2mroASUDfbNCdTANJE9XCjhv9DIg8QCCWgBISKo99mFIAamRv+NXJ0in4CSkC/zMOcWAEIE8XljRj+l+l8kEAIASUgRAz9NqEA5M7c8M+dn90TeBdQAtyF7QIKwHbyaS80/KdRWohACAElIEQMfTahAOTM2vDPmZtdE3gkoAQ8EvLPpwkoANMoty1k+G+j9iICRwSUgCPs/V6qAOTK3PDPlZfdErgqoARclfO5YQEFYJjq+IOG//EIbIDAVgElYCt3v5cpADkyN/xz5GSXBGYLKAGzRa33TUABiH8ZDP/4GdkhgZUCSsBK3cZrKwCxwzf8Y+djdwR2CSgBu6QbvUcBiBu24R83GzsjcEJACTihXvidCkDMcA3/mLnYFYHTAkrA6QQKvV8BiBem4R8vEzsiEElACYiURuK9KACxwjP8Y+VhNwSiCigBUZNJtC8FIE5Yhn+cLOyEQAYBJSBDSoH3qADECMfwj5GDXRDIJqAEZEss0H4VgPNhGP7nM7ADApkFlIDM6R3cuwJwEP/l1Yb/WX9vJ1BFQAmokuTGcygAG7E/vMrwP2fvzQQqCigBFVNdeCYFYCHuD5Y2/M+4eyuB6gJKQPWEJ55PAZiIObjUn16e+8fgs5Ee++Xtf2QRaU/2QoDA9wJZ/wXjzy9H+adA9wkoAPusf/+mbC399QfltQD4DwECOQT8xuTI6eguFYBz/Fm+oIb/uTvizQTuCPiNuaPX4LMKwNmQo39BDf+z98PbCdwV8BtzV7Dw5xWA8+FG/YIa/ufvhh0QmCHgN2aGYsE1FIAYoUb7ghr+Me6FXRCYJeA3ZpZkoXUUgDhhRvmCGv5x7oSdEJgp4DdmpmaBtRSAWCGe/oIa/rHug90QmC3gN2a2aOL1FIB44Z36ghr+8e6CHRFYIeA3ZoVqwjUVgJih7f6CGv4x74FdEVgl4DdmlWyidRWAuGHt+oIa/nHvgJ0RWCngN2alboK1FYDYIa3+ghr+sfO3OwKrBfzGrBYOvL4CEDict62t+oIa/vGzt0MCOwT8xuxQDvgOBSBgKJ9safYX1PDPkbtdEtgl4Ddml3Sg9ygAgcJ4sJVZX1DDP0/mdkpgp4DfmJ3aAd6lAAQI4Ykt3P2CGv5PYHuUQEMBvzGNQlcA8oV99Qtq+OfL2o4JnBDwG3NC/cA7FYAD6BNe+ewX1PCfgG4JAo0E/MY0CFsByBvy6BfU8M+bsZ0TOCngN+ak/oZ3KwAbkBe+4tEX1PBfiG9pAg0E/MYUDlkByB/uV19Qwz9/tk5AIIKA35gIKSzYgwKwAPXAkh+/oIb/gRC8kkBhAb8xBcNVAOqE+v4FNfzrZOokBCIJ+I2JlMaEvSgAExADLfHHl738K9B+bIUAgVoCfmMK5akAFArTUQgQIECAwKiAAjAq5TkCBAgQIFBIQAEoFKajECBAgACBUQEFYFTKcwQIECBAoJCAAlAoTEchQIAAAQKjAgrAqJTnCBAgQIBAIQEFoFCYjkKAAAECBEYFFIBRKc8RIECAAIFCAgpAoTAdhQABAgQIjAooAKNSniNAgAABAoUEFIBCYToKAQIECBAYFVAARqU8R4AAAQIECgkoAIXCdBQCBAgQIDAqoACMSnmOAAECBAimKRwOAAAEA0lEQVQUElAACoXpKAQIECBAYFRAARiV8hwBAgQIECgkoAAUCtNRCBAgQIDAqIACMCrlOQIECBAgUEhAASgUpqMQIECAAIFRAQVgVMpzBAgQIECgkIACUChMRyFAgAABAqMCCsColOcIECBAgEAhAQWgUJiOQoAAAQIERgUUgFEpzxEgQIAAgUICCkChMB2FAAECBAiMCigAo1KeI0CAAAEChQQUgEJhOgoBAgQIEBgVUABGpTxHgAABAgQKCSgAhcJ0FAIECBAgMCqgAIxKeY4AAQIECBQSUAAKhekoBAgQIEBgVEABGJXyHAECBAgQKCSgABQK01EIECBAgMCogAIwKuU5AgQIECBQSEABKBSmoxAgQIAAgVEBBWBUynMECBAgQKCQgAJQKExHIUCAAAECowIKwKiU5wgQIECAQCEBBaBQmI5CgAABAgRGBRSAUSnPESBAgACBQgIKQKEwHYUAAQIECIwKKACjUp4jQIAAAQKFBBSAQmE6CgECBAgQGBVQAEalPEeAAAECBAoJKACFwnQUAgQIECAwKqAAjEp5jgABAgQIFBJQAAqF6SgECBAgQGBUQAEYlfIcAQIECBAoJKAAFArTUQgQIECAwKiAAjAq5TkCBAgQIFBIQAEoFKajECBAgACBUQEFYFTKcwQIECBAoJCAAlAoTEchQIAAAQKjAgrAqJTnCBAgQIBAIQEFoFCYjkKAAAECBEYFFIBRKc8RIECAAIFCAgpAoTAdhQABAgQIjAooAKNSniNAgAABAoUEFIBCYToKAQIECBAYFVAARqU8R4AAAQIECgkoAIXCdBQCBAgQIDAqoACMSnmOAAECBAgUElAACoXpKAQIECBAYFRAARiV8hwBAgQIECgkoAAUCtNRCBAgQIDAqIACMCrlOQIECBAgUEhAASgUpqMQIECAAIFRAQVgVMpzBAgQIECgkIACUChMRyFAgAABAqMCCsColOcIECBAgEAhAQWgUJiOQoAAAQIERgUUgFEpzxEgQIAAgUICCkChMB2FAAECBAiMCigAo1KeI0CAAAEChQQUgEJhOgoBAgQIEBgVUABGpTxHgAABAgQKCSgAhcJ0FAIECBAgMCqgAIxKeY4AAQIECBQSUAAKhekoBAgQIEBgVEABGJXyHAECBAgQKCSgABQK01EIECBAgMCogAIwKuU5AgQIECBQSEABKBSmoxAgQIAAgVEBBWBUynMECBAgQKCQgAJQKExHIUCAAAECowIKwKiU5wgQIECAQCEBBaBQmI5CgAABAgRGBRSAUSnPESBAgACBQgIKQKEwHYUAAQIECIwKKACjUp4jQIAAAQKFBBSAQmE6CgECBAgQGBVQAEalPEeAAAECBAoJ/D8RPL1qsSlDiwAAAABJRU5ErkJggg=="
			/>
		</svg>
	);
};
