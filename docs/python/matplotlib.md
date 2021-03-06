# Matplotlib

?> https://github.com/matplotlib/cheatsheets

## 配置 Configuration

配置文件

```python
import matplotlib
print(matplotlib.matplotlib_fname())
## e.g. C:\Users\<username>\Miniconda3\lib\site-packages\matplotlib\mpl-data\matplotlibrc
```

可以用来设置默认字体
（新安装的字体可能会找不到，删掉 `$HOME\.matplotlib\fontlist-*.json` 缓存文件即可）

在程序中也可以进行配置，比如

```python
plt.rc("text", usetex=True)
plt.rc("font", family="serif")
plt.rc("font", **{"sans-serif": "Consolas"})
```

一些默认值

```
figure.figsize: 6.4, 4.8  ## figure size in inches
```

---

## Default Color Cycle

```python
prop_cycle = plt.rcParams["axes.prop_cycle"]
colors = prop_cycle.by_key()["color"]
```

---

## 让 x, y 轴等刻度

```python
# plt.axis("equal")
## 一般来说上面的用法就够了，但是如果同时对 xlim, ylim 有要求的话，下方的用法更准确
plt.gca().set_aspect("equal", adjustable="box")
```

---

## 使用 Colormap

```python
from matplotlib.cm import ScalarMappable
from matplotlib.colors import Normalize

## The default colormap assumes range [0, 1]. `ScalarMappable` allows custom range.
min_value = -1
max_value = 1
mappable = ScalarMappable(Normalize(min_value, max_value), "bwr")
mappable.set_array(np.array([min_value, max_value]))  ## Don't know why but `set_array` is needed

certain_patch.set_color(mappable.to_rgba(value))

plt.colorbar(mappable)
```

---

## 保存图片时常用的设置

```python
plt.savefig("filename.pdf", bbox_inches="tight")
plt.savefig("filename.png", bbox_inches="tight", dpi=200)
```

---

## Colorbar

### 使 colorbar 刻度为整数

```python
from matplotlib.ticker import MaxNLocator

bar = fig.colorbar()
bar.locator = MaxNLocator(integer=True)
bar.update_ticks()

## 如果是坐标轴的话
# plt.gca().yaxis.set_major_locator(MaxNLocator(integer=True))
```

### 使 colorbar 和作图内容的高度相符

```python
im = plt.imshow()  ## ...
plt.colorbar(im, fraction=0.046, pad=0.4)
```

不知道原理但是很神奇（[更多讨论](https://stackoverflow.com/a/26720422)）
